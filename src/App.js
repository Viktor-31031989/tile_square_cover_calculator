import React, {useState} from "react";
import { Switch, TextField} from "@mui/material";
import Results from "./components/Results";

function App() {
    const [metricOn, setMetricOn] = useState(false)
    const [tileWidth, setTileWidth] = useState('');
    const [tileLength, setTileLength] = useState('');
    const [boxNumber, setBoxNumber] = useState('');
    const [amountOfTilesInBox, setAmountOfTilesInBox] = useState('');
    const [squareToCover, setSquareToCover] = useState('');
    const [boxPrice, setBoxPrice] = useState('');
    const [turnOn, setTurnOn] = useState(false);

    function toggle() {
        setTurnOn(!turnOn)
    }

    function toggle1() {
        setMetricOn(!metricOn)
    }

    return (
                <div style={{
                    margin: "30px auto 0 auto",
                    boxShadow: "2px 2px 10px grey",
                    maxWidth: '350px',
                    borderRadius: '10px'

                }}>
                    <h2 style={{
                        textAlign: "center",
                        padding: "20px",
                        fontFamily: "sans-serif",
                        color: "grey",
                        margin: "0"
                    }}>Tile Counter</h2>
                    <div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            margin: '0 45px 0 30px'
                        }}>
                            <div>
                                <Switch
                                    onChange={toggle}
                                />
                                {turnOn ? 'By box' : 'By tile'}
                            </div>
                            <div>
                                <Switch
                                    onChange={toggle1}
                                />
                                {metricOn ? 'US' : 'EU'}
                            </div>
                        </div>
                    </div>

                    <div style={{display: "inline-block"}}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            maxWidth: "180px",
                        }}>

                            <TextField value={tileWidth} onChange={(e) => setTileWidth(e.target.value)}
                                       style={{margin: "10px"}} id="outlined-basic"
                                       label={metricOn ? 'Tile Width inch' : 'Tile Width in cm'}
                                       variant="outlined"/>


                            <TextField value={tileLength} onChange={(e) => setTileLength(e.target.value)}
                                       style={{margin: "10px"}} id="outlined-basic"
                                       label={metricOn ? "Tile Length inch" : "Tile Length in cm"}
                                       variant="outlined"/>


                            <TextField value={squareToCover} onChange={(e) => setSquareToCover(e.target.value)}
                                       style={{margin: "10px"}} id="outlined-basic"
                                       label={metricOn ? 'Squares feet' : "Squares in m2"}
                                       variant="outlined"/>

                            <TextField style={{margin: "10px"}} value={amountOfTilesInBox}
                                       onChange={(e) => setAmountOfTilesInBox(e.target.value)}
                                       id="outlined-basic" label="Tiles in a box " variant="outlined"/>


                            <TextField style={{margin: "10px"}} value={boxPrice}
                                       onChange={(e) => setBoxPrice(e.target.value)}
                                       id="outlined-basic" label="Price for box " variant="outlined"/>
                        </div>
                    </div>

                    <div style={{display: "inline-block"}}>

                        <Results
                            tileWidth={tileWidth}
                            tileLength={tileLength}
                            squareToCover={squareToCover}
                            setAmountOfTilesInBox={setAmountOfTilesInBox}
                            boxNumber={boxNumber}
                            setBoxNumber={setBoxNumber}
                            amountOfTilesInBox={amountOfTilesInBox}
                            boxPrice={boxPrice}
                            turnOn={turnOn}
                            setTileWidth={setTileWidth}
                            setTileLength={setTileLength}
                            setSquareToCover={setSquareToCover}
                            metricOn={metricOn}
                            setMetricOn={setMetricOn}
                        />

                    </div>
                </div>
    );
}

export default App;
