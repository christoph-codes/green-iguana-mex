import { Client } from "@notionhq/client";

const NOTION_API_SECRET = 'secret_a2F2V1DjVkBxKQWHMS5X7MEcCKbM7hDTaRjKArfxil2';

const notion = new Client({ auth: NOTION_API_SECRET });

const getPage = async (req: any, res: any) => {
  try {
    const blockId = '60a3ff7a62ec4549bcde026ba4008a25';
    const response = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 50,
    });
    console.log('results:',response.results);
    res.status(200).json(response.results);
  } catch (error: any) {
    res.status(400).json(error.body);
  }
    
}; 

export default getPage;