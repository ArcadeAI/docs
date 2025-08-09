import { Arcade } from '@arcadeai/arcadejs';

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = '{arcade_user_id}';
const TOOL_NAME = 'GoogleHotels.SearchHotels';

const toolInput = {
  location: 'New York, NY',
  check_in_date: '2025-09-01',
  check_out_date: '2025-09-02',
  query: 'hotel',
  currency: 'USD',
  min_price: 100,
  max_price: 500,
  num_adults: 2,
  num_children: 0,
  sort_by: 'RELEVANCE',
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(response);
