import "./Sidebar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import MusicPlayer from "./gadgets/MusicPlayer"
import CalendarWidget from "./gadgets/CalendarWidget"
import DiceWidget from "./gadgets/DiceWidget"

const gadgets = [
    { id: "music", icon: "music", label: "Música", component: MusicPlayer },
    { id: "cal", icon: "calendar-days", label: "Calendario", component: CalendarWidget },
    { id: "dice", icon: "dice", label: "Actividad", component: DiceWidget },
]

function Sidebar({ activePanel, setActivePanel }) {
    const togglePanel = (id) => {
        setActivePanel(activePanel === id ? null : id)
    }

    return (
        <aside className="sidebar">
            {gadgets.map(({ id, icon, label, component: Component }) => (
                <div key={id} className="gadget-wrapper">

                    <button
                        className={`gadget-btn ${activePanel === id ? "active" : ""}`}
                        onClick={() => togglePanel(id)}
                    >
                        <FontAwesomeIcon icon={icon} className="gadget-icon" />
                        <span className="gadget-tooltip">{label}</span>
                    </button>

                    {activePanel === id && (
                        <div className="gadget-panel">
                            <button
                                className="panel-close"
                                onClick={() => setActivePanel(null)}
                            >
                                <FontAwesomeIcon icon="xmark" />
                            </button>
                            <Component />
                        </div>
                    )}

                </div>
            ))}
        </aside>
    )
}

export default Sidebar