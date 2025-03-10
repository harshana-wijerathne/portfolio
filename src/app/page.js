import React from 'react';
import Header from "@/(component)/header";
import Body from "@/(component)/body2";
import Footer from "@/(component)/footer";

function Page(props) {
    return (
        <div id={"home"} className={"col-lg-8 d-flex flex-column align-items-center mx-auto"}>
            {/*<Header/>*/}
            <Body/>
            {/*<Footer/>*/}
        </div>


    );
}

export default Page;