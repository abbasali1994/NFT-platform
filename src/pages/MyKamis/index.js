import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import LoaderSpinner from "react-loader-spinner";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NFT from "../../components/NFT";
import { fetchUserData } from "../../utils/wallet";
import { getEthersProvider } from "../../utils/wallet";

import "./style.css";

export default function MyKamis() {
    const provider = getEthersProvider();
    const [nftURLs, setNftURLs] = useState([]);

    useEffect(() => {
        if (provider) {
            fetchUserData().then((res) => {
                setNftURLs(res);
            })   
        }
    }, [provider]);
    
    return (    
        <>
            <Navbar />
            <div  className="kamis-container">
                <Grid container spacing={3}>
                {
                nftURLs.length > 0 ? (
                    <>
                        {
                            nftURLs.map((url ,id) => {
                                return (
                                    <NFT metaUrl = {url} key={id} />
                                )
                            })
                        }
                    </>
                ) : (
                    <div className="load-spin-container">
                        <LoaderSpinner   
                            type="ThreeDots"
                            color="white"
                            height={30}
                            width={100}
                        />
                    </div>
                )}
                </Grid>
            </div>
        <Footer/>
        </>
  );
}
