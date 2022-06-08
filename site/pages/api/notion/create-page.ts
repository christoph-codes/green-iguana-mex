import { Client } from "@notionhq/client";

const NOTION_API_SECRET = 'secret_a2F2V1DjVkBxKQWHMS5X7MEcCKbM7hDTaRjKArfxil2';
const NOTION_DB_ID = '46c42d210ea440bea7ca56cf7ea253e6';

const notion = new Client({ auth: NOTION_API_SECRET });
const databaseId = NOTION_DB_ID;

( async () => {

    try {
        const response = await notion.pages.create({
            parent: {
                type: 'page',
            database_id: databaseId,
            },
            icon: {
                type: "emoji",
                    emoji: "🥬"
            },
            cover: {
                type: "external",
                external: {
                    url: "https://upload.wikimedia.org/wikipedia/commons/6/62/Tuscankale.jpg"
                }
            },
            properties: {
                Name: {
                    title: [
                    {
                        text: {
                        content: 'Tuscan Kale',
                        },
                    },
                    ],
                },
            },
            children: [
            {
                object: 'block',
                type: 'heading_2',
                heading_2: {
                rich_text: [
                    {
                    type: 'text',
                    text: {
                        content: 'Lacinato kale',
                    },
                    },
                ],
                },
            },
            {
                object: 'block',
                type: 'paragraph',
                paragraph: {
                rich_text: [
                    {
                    type: 'text',
                    text: {
                        content: 'Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.',
                        link: {
                        url: 'https://en.wikipedia.org/wiki/Lacinato_kale',
                        },
                    },
                    },
                ],
                },
            },
            ],
        });
        console.log(response);
        console.log("Success Creating a Page! Entry added.");
    } catch (error: any) {
        console.error(error.body);
    }   
})();