const url = "https://hhomura.github.io/api-datas/database.json";

const response = (async () => {
  try {
    const res = await fetch(url, { method: "GET" });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null; // Retorna null ou outra coisa apropriada em caso de erro
  }
})();

export default response;
