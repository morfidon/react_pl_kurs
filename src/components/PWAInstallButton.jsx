import { useEffect, useState } from 'react'
function PWAInstallButton() {
    const [showInstallButton, setShowInstallButton] = useState(false);
    
    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault();
            setShowInstallButton(true);
        }

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    }, [] );
    
    return (  
        showInstallButton ?      
        <button>
            Install PWA app
        </button>
        : null
    )
  
}

export default PWAInstallButton