import Particles from "react-tsparticles";
import React from "react";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticlesComponent = () => {
    const options = useMemo(() => {
        return {
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: "push",
                    },
                    /* onHover: {
                        enable: true,
                        mode: "repulse"
                    }  */
                },
                modes: {
                    push: {
                        quantity: 10,
                    },
                    repulse: {
                        radius: 100,
                    },
                },
            },
            particles: {
                links: {
                    enable: true,
                },
                move: {
                    enable: true,
                    speed: { min: 1, max: 3 },
                },
                opacity: {
                    value: { min: 0.1, max: 0.3 },
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
        };
    }, []);

    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
    }, []);

    return <Particles init={particlesInit} options={options} />;
};

export default ParticlesComponent;
