import { TypeAnimation } from "react-type-animation";
import './TextoAnimado.css';

export function TextoAnimado() {
    return (
        <TypeAnimation
            sequence={[
                'Enzo Pennisi', 1000,
                'FullStack Developer', 1000,
            ]}
            speed={30}
            deletionSpeed={30}
            className="texto-animado"
            repeat={Infinity}
        />
    );
}