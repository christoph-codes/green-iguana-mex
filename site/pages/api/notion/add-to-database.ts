import { Client } from "@notionhq/client";

const NOTION_API_SECRET = 'secret_a2F2V1DjVkBxKQWHMS5X7MEcCKbM7hDTaRjKArfxil2';
const NOTION_DB_ID = '46c42d210ea440bea7ca56cf7ea253e6';

const notion = new Client({ auth: NOTION_API_SECRET });

const databaseId = NOTION_DB_ID;

const addToDB = async (text: any) => {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: { 
          title:[
            {
              "text": {
                "content": text
              }
            }
          ]
        }
      },
    });
    console.log(response);
    console.log("Success! Entry added.");
  } catch (error: any) {
    console.error(error.body);
  }
};

export default addToDB;