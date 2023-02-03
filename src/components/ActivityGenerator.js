import React, { useEffect, useState } from 'react';
import axios from "axios";
import ExpandableListItem from "./ExpandableListItem";



const ActivityGenerator = () => {
    //setting initial state
    const [activityList, setActivityList] = useState([]);
    const [disableButton, setDisableButton] = useState(false);

    //setting up the fetch function to get activities from Bored Panda API
    const generateActivity = () => {
        //prevents another button click while data loads
        setDisableButton(true);
        const getActivity = async () => {
            // axios.get request to Bored Panda Api
            const activity = await axios.get("https://www.boredapi.com/api/activity");
            setActivityList([...activityList, activity.data]);
            //resets button to allow click again
            setDisableButton(false);
        };
        getActivity();
    };

    useEffect(generateActivity, []);



    return (
        <main>
            <h2 className='--text-center --color-danger'>Random Activity Generator Using Bored Panda API</h2>
            <div className='container --mt2 --flex-center'>
                <button
                    type="button"
                    className='--btn --btn-primary --btn-lg'
                    onClick={() => generateActivity()}
                >Generate New Activity</button>
            </div>
            <section>
                <div className=" " style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 20,
                }}>
                    <ul className='--mx2 --card --py2'>
                        {activityList.map((activity) => {
                            return <ExpandableListItem item={activity} />;
                        })}
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default ActivityGenerator;
