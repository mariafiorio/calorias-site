"use client";

import React, { useState } from "react";

export const MBCalculator: React.FC = () => {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [age, setAge] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    let mb = 0;

    if (gender === "male") {
      mb = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      mb = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    setResult(mb);
  };

  return (
    <section className="my-8 rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        🧮 Calcule Seu Metabolismo Basal
      </h2>
      <p className="mb-4 text-gray-600">
        Preencha os campos abaixo para estimar seu MB usando a fórmula de
        Mifflin-St Jeor.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <label className="flex flex-col text-sm text-gray-700">
          Sexo:
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value as "male" | "female")}
            className="mt-1 rounded border p-2"
          >
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
          </select>
        </label>

        <label className="flex flex-col text-sm text-gray-700">
          Peso (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="mt-1 rounded border p-2"
          />
        </label>

        <label className="flex flex-col text-sm text-gray-700">
          Altura (cm):
          <input 
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="mt-1 rounded border p-2"
          />
        </label>

        <label className="flex flex-col text-sm text-gray-700">
          Idade (anos):
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="mt-1 rounded border p-2"
          />
        </label>
      </div>

      <button
        type="button"
        onClick={handleCalculate}
        className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700 transition"
      >
        Calcular MB
      </button>

      {result !== null && (
        <p className="mt-4 text-lg font-semibold text-green-700">
          ✅ Seu metabolismo basal estimado é de {result.toFixed(2)} kcal/dia.
        </p>
      )}
    </section>
  );
};
