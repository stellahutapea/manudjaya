// src/components/FinancialReport.js
import React from "react";
import Swal from "sweetalert2";
import "./FinancialReport.css"; // Mengimpor file CSS khusus
import { Surat } from "../../Assets/Surat";

const FinancialReport = () => {
  // Contoh data keuangan desa
  const financialData = [
    { id: 1, month: "Januari", income: 5000, expenses: 3000 },
    { id: 2, month: "Februari", income: 6000, expenses: 3500 },
    { id: 3, month: "Maret", income: 5500, expenses: 3200 },
  ];

  return (
    <div className="financial-report">
      <h2>Laporan Keuangan Desa</h2>
      <table>
        <thead>
          <tr>
            <th>Bulan</th>
            <th>Pendapatan</th>
            <th>Pengeluaran</th>
          </tr>
        </thead>
        <tbody>
          {financialData.map((item) => (
            <tr key={item.id}>
              <td>{item.month}</td>
              <td>{item.income}</td>
              <td>{item.expenses}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <a
        href={Surat} // Ganti dengan URL atau path yang sesuai dengan dokumen yang ingin Anda unduh
        download="Surat.pdf" // Nama file yang akan diunduh
        target="_blank"
        // Menambahkan gaya hover
        onMouseOver={(e) => (e.target.style.backgroundColor = "chocolate")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#8B4513")}
      >
        <button className="download-button" onClick={downloadDocument}>
          Unduh Dokumen
        </button>
      </a>
    </div>
  );
};

const downloadDocument = () => {
  Swal.fire("Sukses", "Dokumen telah diunduh.", "success");
};

export default FinancialReport;
