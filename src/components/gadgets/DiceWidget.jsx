import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./DiceWidget.css"

const activities = [
    { icon: "palette", text: "¡Pinta algo hoy!" },
    { icon: "utensils", text: "¡Cocina una receta nueva!" },
    { icon: "music", text: "¡Escucha un álbum completo!" },
    { icon: "pencil", text: "¡Dibuja lo que ves!" },
    { icon: "plane", text: "¡Sal a explorar!" },
    { icon: "camera", text: "¡Toma fotos hoy!" },
    { icon: "book", text: "¡Lee algo nuevo!" },
    { icon: "cat", text: "¡Pasa tiempo con tus gatos!" },
]

function DiceWidget() {
    const [activity, setActivity] = useState(null)
    const [rolling, setRolling] = useState(false)

    const roll = () => {
        if (rolling) return
        setRolling(true)
        setActivity(null)

        setTimeout(() => {
            const random = activities[Math.floor(Math.random() * activities.length)]
            setActivity(random)
            setRolling(false)
        }, 600)
    }

    return (
        <div className="dice-widget">
            <div className="dice-title">
                <FontAwesomeIcon icon="dice" /> Actividad del día
            </div>

            <p className="dice-desc">
                ¿Sin ideas? ¡Lanza el dado y descubre qué hacer hoy!
            </p>

            <button
                className={`dice-btn ${rolling ? "rolling" : ""}`}
                onClick={roll}
                disabled={rolling}
            >
                <FontAwesomeIcon icon="dice" className="dice-btn-icon" />
                {rolling ? "Lanzando..." : "Lanzar dado"}
            </button>

            {activity && !rolling && (
                <div className="dice-result">
                    <FontAwesomeIcon icon={activity.icon} className="result-icon" />
                    <span>{activity.text}</span>
                </div>
            )}
        </div>
    )
}

export default DiceWidget