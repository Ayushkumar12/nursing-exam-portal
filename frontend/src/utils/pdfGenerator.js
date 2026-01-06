import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const generateSessionPDF = (session) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  // Header
  doc.setFontSize(14);
  doc.setTextColor(33, 150, 243); // Primary Blue  
  
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text(`Exam: ${session.exam}`, 14, 22);
  doc.text(`Date: ${new Date(session.date).toLocaleString()}`, 14, 27);
  doc.text(`Score: ${session.score}/${session.totalQuestions} (${Math.round((session.score / session.totalQuestions) * 100)}%)`, 14, 32);

  // Combine correct, incorrect and skipped questions
  const allQuestions = [
    ...session.correct.map(q => ({ ...q, status: 'Correct' })),
    ...session.incorrect.map(q => ({ ...q, status: 'Incorrect' })),
    ...(session.skipped || []).map(q => ({ ...q, status: 'Skipped' }))
  ];

  const tableData = allQuestions.map((q, index) => [
    index + 1,
    q.question,
    q.options[q.correct] || 'N/A',
    q.options[q.selectedOption] || 'N/A',
    q.status,
    q.explanation || 'No reasoning provided.'
  ]);

  autoTable(doc, {
    startY: 38,
    head: [['#', 'Question', 'Correct Answer', 'Your Answer', 'Status', 'Reasoning']],
    body: tableData,
    headStyles: { fillColor: [33, 150, 243] },
    columnStyles: {
      0: { cellWidth: 7 },
      1: { cellWidth: 60 },
      2: { cellWidth: 30 },
      3: { cellWidth: 30 },
      4: { cellWidth: 15 },
      5: { cellWidth: 'auto' }
    },
    styles: { overflow: 'linebreak', cellPadding: 1, fontSize: 7 },
    didParseCell: function(data) {
      if (data.section === 'body' && data.column.index === 4) {
        if (data.cell.raw === 'Correct') {
          data.cell.styles.textColor = [76, 175, 80]; // Green
          data.cell.styles.fontStyle = 'bold';
        } else if (data.cell.raw === 'Incorrect') {
          data.cell.styles.textColor = [244, 67, 54]; // Red
          data.cell.styles.fontStyle = 'bold';
        } else if (data.cell.raw === 'Skipped') {
          data.cell.styles.textColor = [158, 158, 158]; // Grey
          data.cell.styles.fontStyle = 'bold';
        }
      }
    }
  });

  doc.save(`${session.exam}_Session_${new Date(session.date).toLocaleDateString().replace(/\//g, '-')}.pdf`);
};
