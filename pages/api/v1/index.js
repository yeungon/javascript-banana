async function fetchQuestions(){
  const res = await fetch(`https://api.vuongnguyen.net/airtable/js.php`);
  const data = await res.json();
  return data;
}

export default async function handler(req, res) {
    try {
      const result = await fetchQuestions()
      res.status(200).json({ result })
    } catch (err) {
      res.status(500).json({ error: 'failed to load data' })
    }
  }