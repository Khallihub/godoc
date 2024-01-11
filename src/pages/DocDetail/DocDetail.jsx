// DocDetailPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './DocDetailPage.module.css'; // Import the CSS file for styling

const DocDetailPage = ({ match }) => {
  // Sample document details, replace with actual data
  const documentDetails = {
    id: match.params.id,
    name: 'Sample Document',
    access: 'Private',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  };

  // State to manage access modification
  const [newAccess, setNewAccess] = useState(documentDetails.access);

  const handleAccessChange = (event) => {
    setNewAccess(event.target.value);
  };

  return (
    <div className={styles['doc-detail-container']}>
      <h2 className={styles['doc-detail-title']}>{documentDetails.name}</h2>
      <div className={styles['doc-detail-content']}>{documentDetails.content}</div>
      
      <div className={styles['access-container']}>
        <label htmlFor="access">Access:</label>
        <select id="access" value={newAccess} onChange={handleAccessChange}>
          <option value="Public">Public</option>
          <option value="Private">Private</option>
          {/* Add more access levels if needed */}
        </select>
        <button className={styles['modify-access-button']} onClick={() => console.log('Modify Access')}>
          Modify Access
        </button>
      </div>

      <Link to={`/documents/${documentDetails.id}/edit`} className={styles['edit-button']}>
        Edit Document
      </Link>
    </div>
  );
};

export default DocDetailPage;
