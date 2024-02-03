import os from 'os';

export const printCPUs = () => {
  const cpus = os.cpus();
  const cpusQuantity = cpus.length;

  console.log(`Total CPUs: ${cpusQuantity}`);

  const cpuTable = cpus.map((cpu, index) => ({
    'CPU Number': index + 1,
    Model: cpu.model,
    'Clock Rate (GHz)': (cpu.speed / 1000).toFixed(2),
  }));

  console.table(cpuTable);
};
