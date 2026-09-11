import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error inside component tree:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0a0a0c] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md bg-obsidian-card p-8 border border-gold/30 rounded-2xl shadow-2xl">
            <h1 className="font-display text-2xl font-bold text-gold mb-3">
              Dr. Carvalho | Advocacia
            </h1>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Ocorreu uma pequena instabilidade ao carregar os recursos visuais. Clique abaixo para recarregar o atendimento.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gold hover:bg-gold-dark text-black font-semibold text-xs px-6 py-3 rounded tracking-wider uppercase transition-colors"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
