const table = document.getElementById('dataTable');
const btnExportToCsv = document.getElementById('btnExportToCsv');

btnExportToCsv.addEventListener('click', () => {
	const exporter = new TableCSVExporter(table);
	const csvOutput = exporter.covertToCSV();
	const csvBlob = new Blob([csvOutput], { type: 'text/csv' });
	const blobUrl = URL.createObjectURL(csvBlob);
	const anchorEl = document.createElement('a');

	anchorEl.href = blobUrl;
	anchorEl.download = 'table-export.csv';
	anchorEl.click();

	setTimeout(() => {
        URL.revokeObjectURL(blobUrl);
    }, 500);
});