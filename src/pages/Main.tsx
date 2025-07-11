import { useEffect, useState } from "react";

export default function Main() {
    const [isMount, setIsMount] = useState(false);
    const [flameIndex, setFlameIndex] = useState(0);
    const [waveIndex, setWaveIndex] = useState(0);

    useEffect(() => {
        setIsMount(true);
    }, []);

    useEffect(() => {
        const flameInterval = setInterval(() => {
            setFlameIndex((prev) => (prev + 1) % 2);
        }, 400);

        return () => clearInterval(flameInterval);
    }, []);

    useEffect(() => {
        const waveInterval = setInterval(() => {
            setWaveIndex((prev) => (prev + 1) % 4);
        }, 1200);

        return () => clearInterval(waveInterval);
    }, []);

    return (
        <>
            <div className="relative h-screen w-screen">
                {/* 배경 */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_#212453_0%,_#432E5B_40%,_#723D59_60%,_#C54C52_70%)]" />

                <div className="absolute bg-img bg-[url('/sky.png')]" />
                <div className="bg-img bg-[url('/clouds.png')] animate-cloud" />
                <div
                    className={`absolute h-screen w-screen text-8xl cursor-default delay-100 transition-all duration-1200 ease-out ${
                        !isMount && "translate-y-96"
                    }`}
                >
                    <div className="absolute bottom-0 w-full h-[20%] bg-[#836161]" />
                    {waveIndex === 0 ? (
                        <div className="bg-img bg-[url('/wave1.png')]" />
                    ) : waveIndex === 1 ? (
                        <div className="bg-img bg-[url('/wave2.png')]" />
                    ) : waveIndex === 2 ? (
                        <div className="bg-img bg-[url('/wave3.png')]" />
                    ) : (
                        <div className="bg-img bg-[url('/wave4.png')]" />
                    )}
                    <div className="bg-img bg-[url('/character1.png')]" />
                    {flameIndex === 0 ? (
                        <div className="bg-img bg-[url('/flame1.png')]" />
                    ) : (
                        <div className="bg-img bg-[url('/flame2.png')]" />
                    )}
                </div>

                {/* 텍스처 필터 */}
                <div className="absolute inset-0 bg-[url('/filter.svg')] bg-repeat opacity-30 mix-blend-multiply" />

                {/* 텍스트 */}
                <div className="relative pt-[9%] flex flex-col items-center h-full text-center text-white">
                    <h1
                        className={`stardust text-8xl cursor-default delay-1500 duration-1000 ${
                            !isMount && "translate-y-5 opacity-0"
                        }`}
                    >
                        사용자를 생각하는 프론트엔드
                    </h1>
                    <h1
                        className={`z-100 stardust text-8xl cursor-default delay-2200 duration-1000 ${
                            !isMount && "translate-y-5 opacity-0"
                        }`}
                    >
                        <span className="neodunggeunmo">강하영</span>입니다.
                    </h1>
                </div>
            </div>
        </>
    );
}
