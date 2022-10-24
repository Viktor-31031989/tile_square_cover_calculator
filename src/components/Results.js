import {TextField} from "@mui/material";

function Results({
                     squareToCover,
                     tileWidth,
                     tileLength,
                     amountOfTilesInBox,
                     boxPrice,
                     turnOn,
                 }) {

    const amountOfTiles = Math.ceil(+(squareToCover * 10000 / (tileWidth * tileLength)));
    const overHead = Math.floor((Math.ceil(amountOfTiles)) * 0.15);
    const numOfBoxes = Math.floor((amountOfTiles + overHead) / amountOfTilesInBox);
    const tilesByOne = (amountOfTiles + overHead) - (numOfBoxes * amountOfTilesInBox);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "150px",
        }}>
            <TextField style={{margin: "10px"}} value={amountOfTiles ? amountOfTiles : 0}
                       id="outlined-basic" label="Amount of tiles " variant="outlined"/>

            <TextField style={{margin: "10px"}}
                       value={overHead ? overHead : 0}
                       id="outlined-basic" label="Over head 15%" variant="outlined"/>

            <TextField style={{margin: "10px"}}
                       value={turnOn ? Math.ceil((amountOfTiles + overHead) / amountOfTilesInBox) : Math.floor((amountOfTiles + overHead) / amountOfTilesInBox)}
                       id="outlined-basic" label="Boxes" variant="outlined"/>

            <TextField style={{margin: "10px"}}
                       value={turnOn ? 0 : tilesByOne}
                       id="outlined-basic" label="Tiles by one" variant="outlined"/>

            <TextField style={{margin: "10px"}}
                       value={turnOn ? (boxPrice * (numOfBoxes + 1)) : (amountOfTiles + overHead) * (boxPrice / amountOfTilesInBox)}
                       id="outlined-basic" label={turnOn ? "Total price for boxes" : "Total price for tiles"}
                       variant="outlined"/>
            </div>
            );
            }

            export default Results;