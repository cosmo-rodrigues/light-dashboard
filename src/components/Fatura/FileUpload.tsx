// @ts-nocheck
import { useState } from 'react';
import * as Material from '@mui/material';
import { useForm } from 'react-hook-form';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { api } from '../../services/api';

export function FileUpload() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('file', data.file[0]);

    try {
      await api.post(
        '/fatura',
        { pdf: formData },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / (progressEvent.total || 1)
            );
            setUploadProgress(percentCompleted);
          },
        }
      );
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setUploadProgress(0);
      }, 2000);
    }
  };

  return (
    <div className="App">
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: 'flex',
        }}
      >
        <label
          htmlFor="file"
          style={{
            alignItems: 'center',
            border: '1px solid #ccc',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '6px 12px',
            width: '170px',
          }}
        >
          <CloudUploadIcon />
          <Material.Typography>SELECIONAR</Material.Typography>
        </label>
        <input
          type="file"
          id="file"
          {...register('file')}
          accept=".pdf"
          style={{
            display: 'none',
          }}
        />
        <label
          htmlFor="submit"
          style={{
            alignItems: 'center',
            border: '1px solid #ccc',
            backgroundColor: '#82ffa1',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '6px 12px',
          }}
        >
          <Material.Typography>CADASTRAR</Material.Typography>
        </label>
        <input
          type="submit"
          id="submit"
          {...register('submit')}
          style={{
            display: 'none',
          }}
        />
      </form>
      <Material.LinearProgress variant="determinate" value={uploadProgress} />
    </div>
  );
}
