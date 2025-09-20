export interface ContextPreferencesT {
    lang: string;
    toggleLang: (value: string) => void;
    onOpen: () => void;
    onClose: () => void;
    menu: boolean;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  }