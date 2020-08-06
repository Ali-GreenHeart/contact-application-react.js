import React from 'react';
import ContactConsumer from "../../../Context/Context";
import "./Home.css";



export default function Home() {
    return (
        <div className='fakeBody' style={{margin:'0 auto',overflow:'hidden'}}>
            <div style={{margin:'0 auto', width:'100%', height:'100vh'}}>
            <div className="content">
                    <div className="sky">
                        <div className="sun"></div>
                        <div className="stars"></div>
                        <div className="stars2"></div>
                        <div className="stars3"></div>
                    </div>
                    <div className="earth">
                        <div className="real">
                            <div className="mountains">
                                <div className="m1"></div>
                                <div className="m1Shadow"></div>
                                <div className="m2"></div>
                                <div className="m2Shadow"></div>
                                <div className="m3"></div>
                                <div className="m3Shadow"></div>
                                <div className="m4"></div>
                                <div className="m4Shadow"></div>
                                <div className="m5"></div>
                                <div className="m5Shadow"></div>
                            </div>
                            <div className="lake"></div>
                            <div className="islandShadow1"></div>
                            <div className="islandShadow2"></div>
                            <div className="island">
                                <div className="surface">
                                    <div className="part1"></div>
                                    <div className="part2"></div>
                                    <div className="part3"></div>
                                </div>
                                <div className="trees">
                                    <div className="tree1">
                                        <div className="leaf1"></div>
                                        <div className="leaf2"></div>
                                        <div className="leaf3"></div>
                                        <div className="leaf4"></div>
                                        <div className="leaf5"></div>
                                        <div className="leaf6"></div>
                                        <div className="leaf7"></div>
                                        <div className="leaf8"></div>
                                        <div className="leaf9"></div>
                                        <div className="leaf10"></div>
                                        <div className="leaf11"></div>
                                    </div>
                                    <div className="tree2">
                                        <div className="leaf1"></div>
                                        <div className="leaf2"></div>
                                        <div className="leaf3"></div>
                                        <div className="leaf4"></div>
                                        <div className="leaf5"></div>
                                        <div className="leaf6"></div>
                                        <div className="leaf7"></div>
                                        <div className="leaf8"></div>
                                        <div className="leaf9"></div>
                                        <div className="leaf10"></div>
                                        <div className="leaf11"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="boat"></div>
                            <div className="human"></div>
                        </div>
                        <div className="reflection">
                            <div className="boat"></div>
                            <div className="human"></div>
                            <div className="islandGlow"></div>
                            <div className="islandR">
                                <div className="islandShadow1"></div>
                                <div className="islandShadow2"></div>
                                <div className="island">
                                    <div className="surface">
                                        <div className="part1"></div>
                                        <div className="part2"></div>
                                        <div className="part3"></div>
                                    </div>
                                    <div className="trees">
                                        <div className="tree1">
                                            <div className="leaf1"></div>
                                            <div className="leaf2"></div>
                                            <div className="leaf3"></div>
                                            <div className="leaf4"></div>
                                            <div className="leaf5"></div>
                                            <div className="leaf6"></div>
                                            <div className="leaf7"></div>
                                            <div className="leaf8"></div>
                                            <div className="leaf9"></div>
                                            <div className="leaf10"></div>
                                            <div className="leaf11"></div>
                                        </div>
                                        <div className="tree2">
                                            <div className="leaf1"></div>
                                            <div className="leaf2"></div>
                                            <div className="leaf3"></div>
                                            <div className="leaf4"></div>
                                            <div className="leaf5"></div>
                                            <div className="leaf6"></div>
                                            <div className="leaf7"></div>
                                            <div className="leaf8"></div>
                                            <div className="leaf9"></div>
                                            <div className="leaf10"></div>
                                            <div className="leaf11"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
}

