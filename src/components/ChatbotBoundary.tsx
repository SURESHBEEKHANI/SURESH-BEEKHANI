import React from 'react';

type Props = { children: React.ReactNode };
type State = { hasError: boolean; message?: string };

export default class ChatbotBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error?.message };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Chatbot error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, message: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed bottom-4 right-4 z-50 max-w-sm p-4 rounded-2xl bg-white/95 backdrop-blur border border-slate-200 shadow-lg text-sm text-slate-800">
          <div className="font-semibold mb-1">Chatbot recovered from an error</div>
          <div className="text-xs text-slate-600 mb-3">
            {this.state.message || 'Something unexpected happened in the chatbot.'}
          </div>
          <div className="flex gap-2 justify-end">
            <button
              onClick={this.handleReset}
              className="px-3 py-1.5 rounded-md bg-blue-600 text-white text-xs hover:bg-blue-700"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}


