import { NextPage } from "next";

const Notion: NextPage = (): any => {
    const pageData = fetch('/api/notion/get-page')
    .then(res => {
        if(res.status === 200) {
            return res.json();
        }
        return null;
    }).catch(err => console.log(err));
    console.log('hello', pageData);
    return (
        <h1>Hello</h1>
    );
};

export default Notion;