import { useEffect } from "react";

export default function SecurityOverlay() {
  useEffect(() => {
    // 1. Prevent Right Click Context Menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Prevent Copy, Cut, Paste Events
    const handleCopyCutPaste = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    // 3. Prevent Developer Shortcut Keys, Copy-Paste Shortcuts, and Screenshots
    const handleKeyDown = (e: KeyboardEvent) => {
      let isBlocked = false;

      // F12 key
      if (e.key === "F12") {
        isBlocked = true;
      }
      // Ctrl+Shift+I or Cmd+Alt+I (for Developer Tools)
      else if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key?.toLowerCase() === "i") {
        isBlocked = true;
      }
      // Ctrl+Shift+J or Cmd+Alt+J
      else if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key?.toLowerCase() === "j") {
        isBlocked = true;
      }
      // Ctrl+U (View Source)
      else if ((e.ctrlKey || e.metaKey) && e.key?.toLowerCase() === "u") {
        isBlocked = true;
      }
      // Ctrl+S (Save Website)
      else if ((e.ctrlKey || e.metaKey) && e.key?.toLowerCase() === "s") {
        isBlocked = true;
      }
      // Cmd+Alt+U
      else if (e.metaKey && e.altKey && e.key?.toLowerCase() === "u") {
        isBlocked = true;
      }
      // Ctrl+C or Cmd+C (Copy block)
      else if ((e.ctrlKey || e.metaKey) && e.key?.toLowerCase() === "c") {
        isBlocked = true;
      }
      // Ctrl+X or Cmd+X (Cut block)
      else if ((e.ctrlKey || e.metaKey) && e.key?.toLowerCase() === "x") {
        isBlocked = true;
      }
      // Ctrl+V or Cmd+V (Paste block)
      else if ((e.ctrlKey || e.metaKey) && e.key?.toLowerCase() === "v") {
        isBlocked = true;
      }
      // PrintScreen (Windows/Linux screenshot)
      else if (e.key === "PrintScreen") {
        isBlocked = true;
        try {
          navigator.clipboard.writeText("Acesso Restrito: Captura de tela não permitida.");
        } catch (_) {}
      }
      // Cmd+Shift+3, Cmd+Shift+4, Cmd+Shift+5 (Mac screenshot shortcuts)
      else if (e.metaKey && e.shiftKey && ["3", "4", "5"].includes(e.key)) {
        isBlocked = true;
        try {
          navigator.clipboard.writeText("Acesso Restrito: Captura de tela não permitida.");
        } catch (_) {}
      }

      if (isBlocked) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // 4. Overwrite Clipboard on PrintScreen key release
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen") {
        try {
          navigator.clipboard.writeText("Acesso Restrito: Captura de tela proibida.");
        } catch (_) {}
      }
    };

    // 5. Add Listeners to Window
    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("copy", handleCopyCutPaste);
    window.addEventListener("cut", handleCopyCutPaste);
    window.addEventListener("paste", handleCopyCutPaste);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("copy", handleCopyCutPaste);
      window.removeEventListener("cut", handleCopyCutPaste);
      window.removeEventListener("paste", handleCopyCutPaste);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return null;
}
