import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlayerDetail1 from "../../PlayerDetail/PlayerDetail1";
import Statistics from "../../Statistics/Statistics";
import OtherPlayer from "../../OtherPlayer/OtherPlayer";



const SinglePlayer = () => {

    const { id } = useParams();

    const [playerSingle, setplayerSingle] = useState([]);
    const [filepath, setFilepath] = useState("");
    useEffect(() => {
        axios.get(`http://localhost:6001/api/v1/get-player/${id}`)
            .then(response => {
                setplayerSingle(response.data.data);
                setFilepath(response.data.filepath);
                console.log(response.data.data)
            })
            .catch(error => {
                console.log(error)
            });
    }, [id]);
    console.log(playerSingle)
    // console.log(`${filepath}${playerSingle.full_image}`)
    return (
        <>
            

                <PlayerDetail1 key={playerSingle._id}
                 fullImg={`${filepath}${playerSingle.full_image}`} 
                 jersey={playerSingle.jersey_no}
                 position={playerSingle.position}
                 name={`${playerSingle.f_name} ${playerSingle.l_name}`}
                 DOB={playerSingle.date_of_birth}
                 nation={playerSingle.nationality}
                 bgImg={`${filepath}${playerSingle.bg_image}`}
                 mobImg={`${filepath}${playerSingle.mobile_image}`}
                 />  

                 <Statistics match={playerSingle.Matches_played} 
                 pointearn={playerSingle.total_points} 
                 mostpoint={playerSingle.most_points_in_a_match} 
                 percent={playerSingle.not_out_percentage}
                 superraids={playerSingle.no_of_super_raids}
                 super10={playerSingle.super_10s}
                 avgraid={playerSingle.avg_raid_points}
                 nooftakles={playerSingle.no_of_super_tackles}
                 totaltakles={playerSingle.total_tacle_points}
                 />
                 <OtherPlayer />
           
        </>
    );
};

export default SinglePlayer;
