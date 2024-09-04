import { useEffect, useState } from 'react'
function PWAInstallButton() {
    const [showInstallButton, setShowInstallButton] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setShowInstallButton(true);
        }

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    }, [] );
    
    const handleInstallClick = async () => 
    {
        if (deferredPrompt)
        {
            const userChoice = await deferredPrompt.prompt(); //Promise 
            
            if (userChoice.outcome === 'accepted')
            {
                setDeferredPrompt(null);
                setShowInstallButton(false);
            }
        }
    }

    return (  
        showInstallButton ?      
        <button onClick={handleInstallClick}>
            Install PWA app
        </button>
        : null
    )
  
}

export default PWAInstallButton