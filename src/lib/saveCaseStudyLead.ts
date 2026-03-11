import { supabase } from "@/supabaseClient";

export type CaseStudyLeadInput = {
  name: string;
  email: string;
  phone?: string;
  jobTitle?: string;
  company?: string;
  caseStudy: string;
};

export type LocalLeadRecord = CaseStudyLeadInput & {
  createdAt: string;
  source: "localStorage-fallback";
};

const LOCAL_STORAGE_KEY = "case_study_download_leads_queue_v1";

function appendLeadToLocalQueue(input: CaseStudyLeadInput) {
  const record: LocalLeadRecord = {
    ...input,
    createdAt: new Date().toISOString(),
    source: "localStorage-fallback",
  };

  const existingRaw = localStorage.getItem(LOCAL_STORAGE_KEY);
  const existing = existingRaw ? (JSON.parse(existingRaw) as unknown) : [];
  const next = Array.isArray(existing) ? [...existing, record] : [record];
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(next));
}

function readLocalQueue(): LocalLeadRecord[] {
  const existingRaw = localStorage.getItem(LOCAL_STORAGE_KEY);
  const existing = existingRaw ? (JSON.parse(existingRaw) as unknown) : [];
  return Array.isArray(existing) ? (existing as LocalLeadRecord[]) : [];
}

function writeLocalQueue(next: LocalLeadRecord[]) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(next));
}

function toSupabaseRow(input: CaseStudyLeadInput) {
  return {
    name: input.name,
    email: input.email,
    phone: input.phone ?? "",
    job_title: input.jobTitle ?? "",
    company: input.company ?? "",
    case_study: input.caseStudy,
  };
}

export async function flushQueuedCaseStudyLeads(options?: { maxBatchSize?: number }): Promise<{
  attempted: number;
  savedToDatabase: number;
  remainingQueued: number;
}> {
  const maxBatchSize = options?.maxBatchSize ?? 50;
  const queue = readLocalQueue();

  if (queue.length === 0) {
    return { attempted: 0, savedToDatabase: 0, remainingQueued: 0 };
  }

  const batch = queue.slice(0, Math.max(1, maxBatchSize));
  const rows = batch.map((q) =>
    toSupabaseRow({
      name: q.name,
      email: q.email,
      phone: q.phone,
      jobTitle: q.jobTitle,
      company: q.company,
      caseStudy: q.caseStudy,
    })
  );

  try {
    const { error } = await supabase.from("case_study_downloads_data").insert(rows);
    if (!error) {
      const remaining = queue.slice(batch.length);
      writeLocalQueue(remaining);
      return {
        attempted: batch.length,
        savedToDatabase: batch.length,
        remainingQueued: remaining.length,
      };
    }
    console.error("Supabase batch insert error:", error);
  } catch (err) {
    console.error("Unexpected batch flush error:", err);
  }

  return { attempted: batch.length, savedToDatabase: 0, remainingQueued: queue.length };
}

export async function saveCaseStudyLead(input: CaseStudyLeadInput): Promise<{
  savedInDatabase: boolean;
  queuedLocally: boolean;
  via: "supabase" | "localStorage" | "none";
}> {
  // Best-effort: if we have pending leads, try saving them in one batch first.
  // This turns "multiple saved data" into a single async DB call when possible.
  try {
    await flushQueuedCaseStudyLeads({ maxBatchSize: 50 });
  } catch {
    // Ignore flush errors; we still proceed with current lead.
  }

  try {
    const { error } = await supabase.from("case_study_downloads_data").insert([toSupabaseRow(input)]);

    if (!error) {
      return { savedInDatabase: true, queuedLocally: false, via: "supabase" };
    }

    console.error("Supabase Insert Error:", error);
  } catch (err) {
    console.error("Unexpected Error:", err);
  }

  try {
    appendLeadToLocalQueue(input);
    return { savedInDatabase: false, queuedLocally: true, via: "localStorage" };
  } catch (err) {
    console.error("Local fallback save failed:", err);
    return { savedInDatabase: false, queuedLocally: false, via: "none" };
  }
}

