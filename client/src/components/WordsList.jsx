import React, { useEffect, useState, useContext } from 'react';
import wordsService from './../services/wordsServies';


export default function WordsList(props) {

    const [wordss, setwordss] = useState([]);
    const [newwords, setNewwords] = useState({ word: ''});

    useEffect(() => //initial
    {
        getwordss();

        // eslint-disable-next-line
    }, []);

    const getwordss = async () => {
        let _wordss = await wordsService.get();
        setwordss(_wordss);
    }

    const updateFormState = (event) => {
        setNewwords({
            ...newwords,
            [event.target.name]: event.target.value,
        });
    };

    const add=async()=>{
        let wordsId=await wordsService.post(newwords);
        getwordss();
        setNewwords({ word: ''});
    }

    return (
        <div>
            <div>
                <h1>new words:</h1>
        word:<input value={newwords.word} name='word' onChange={updateFormState}></input>
        <button onClick={add}>add words</button>

            </div>

            <div>
                wordss list: {
                    wordss.map(words => <>
                        <div>
                            {words.id} {words.word}
                        </div>
                    </>)
                }
            </div>

        </div>
    )
}