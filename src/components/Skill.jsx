import { PieChart } from 'react-minimal-pie-chart';
function Skill(){
    return(
        <>
            <div className="skill-area">
                <div className="skill-1">
                    <div className="skill-1-chart">
                        <PieChart
                        data={[
                            { title: 'React js', value: 82, color: '#E38627' },
                        ]}
                        totalValue={100}
                        lineWidth={25}
                        rounded
                        label={() => 82}
                        labelPosition={0}
                        radius={35}
                        labelStyle={{
                            "fontSize": "20px",
                            "fontFamily": "sans-serif",
                            "fill": "#E38227"
                          }}
                          animate
                        />
                    </div>
                    <div className="skill-1-label">React js</div>
                </div>
                <div className="skill-2">
                    <div className="skill-2-chart">
                        <PieChart
                        data={[
                            { title: 'Node js', value: 65, color: '#E38627' },
                        ]}
                        totalValue={100}
                        lineWidth={25}
                        rounded
                        label={() => 65}
                        labelPosition={0}
                        radius={35}
                        labelStyle={{
                            "fontSize": "20px",
                            "fontFamily": "sans-serif",
                            "fill": "#E38227"
                          }}
                          animate
                        />;
                    </div>
                    <div className="skill-2-label">Node js</div>
                </div>
                <div className="skill-3">
                    <div className="skill-3-chart">
                        <PieChart
                        data={[
                            { title: 'React native', value: 85, color: '#E38627' },
                        ]}
                        totalValue={100}
                        lineWidth={25}
                        rounded
                        label={() => 85}
                        labelPosition={0}
                        radius={35}
                        labelStyle={{
                            "fontSize": "20px",
                            "fontFamily": "sans-serif",
                            "fill": "#E38227"
                        }}
                        animate
                        />
                    </div>
                    <div className="skill-3-label">React native</div>
                </div>
            </div>
        </>
    )
}
export default Skill;