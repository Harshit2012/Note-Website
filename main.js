document.addEventListener('DOMContentLoaded', function () {
    const noteTextarea = document.getElementById('noteTextarea');
    const downloadBtn = document.getElementById('downloadBtn');
    const deleteBtn = document.getElementById('deleteBtn');

    downloadBtn.addEventListener('click', function () {
        const noteContent = noteTextarea.value;

        if (noteContent.trim() !== '') {
            const blob = new Blob([noteContent], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'note.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            alert('Note downloaded!');
        } else {
            alert('Note is empty. Fill the note before downloading.');
        }
    });

    deleteBtn.addEventListener('click', function () {
        noteTextarea.value = '';
        alert('Note deleted!');
    });
});