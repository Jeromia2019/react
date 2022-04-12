import React, {useState, useEffect} from 'react'

function DemoEventHook() {
    const [count, setCount] = useState(0)

    useEffect(() => {
      document.title = `
      Cliqué 
      ${count} fois
      `
      console.log(count, "Lancement de l'effet");
      return () => {
        console.log(count, "Nettoyage de l'effet");
      }
    }, [count])

  return (
    <div>
        <button onClick={() => setCount(nb => nb + 1)}>
            Compteur : {count}
        </button>
    </div>
  )
}

export default DemoEventHook