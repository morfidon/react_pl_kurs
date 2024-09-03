import { useState } from 'react'
function PWAInstallButton() {
    const [showInstallButton, setShowInstallButton] = useState(false);
    
    // return (  
    //     showInstallButton ?      
    //     <button>
    //         Install PWA app
    //     </button>
    //     : null
    // )
    return (  
        showInstallButton 
        &&      
        <button>
            Install PWA app
        </button>
       
    )    
}

export default PWAInstallButton