const Vendas = [
    {
        id:"1",
        valor:"100",
        produto:"Game 1",
        statusPagamento:"Paid"
    }
]

const Dashboard = () => {
  return (
    <>
      <div className="card bg-[#000]">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current text-[#FFB900]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Vendas</div>
            <div className="stat-value text-white">31K</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current text-[#FFB900]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Usuarios</div>
            <div className="stat-value text-white">4,200</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current text-[#FFB900]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Ganhos</div>
            <div className="stat-value text-white">1,200</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current text-[#FFB900]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Produtos</div>
            <div className="stat-value text-white">1,200</div>
          </div>
        </div>
      </div>
      <h1 className="mt-5 text-white text-[18px] font-semibold">Vendas</h1>
      <div className="overflow-x-auto mt-5 bg-[#000]">
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">Id</th>
              <th className="text-center">Valor</th>
              <th className="text-center">Produto</th>
              <th className="text-center">Status Pagamento</th>
            </tr>
          </thead>
          <tbody>
            {Vendas.map(venda => 
            <tr key={venda.id}>
              <th className="text-center">{venda.id}</th>
              <td className="text-center">{venda.produto}</td>
              <td className="text-center">{venda.valor}</td>
              <td className="text-center">{venda.statusPagamento}</td>
            </tr>
            )}
            
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
