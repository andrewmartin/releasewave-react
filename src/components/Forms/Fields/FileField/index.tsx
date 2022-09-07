import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import cx from 'classnames';
import Image from 'next/image';
import styles from './FileField.module.css';
import { appendHostToImage } from '@/util/image';

interface FileFieldProps {
  name: string;
  onChange: (name: string, args: { filename: string; data: string }) => void;
  src: string;
  width: number;
  height: number;
}

export const FileField = (props: FileFieldProps) => {
  const { name, onChange, src, width, height } = props;
  const [imageSrc, setImageSrc] = useState(src || ``);

  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const { name: filename } = file;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (evt) => {
        if (evt?.target?.result) {
          onChange(name, {
            filename,
            data: evt.target.result as string,
          });
          setImageSrc(evt.target.result as string);
        }
      };
    });
  };

  return (
    <div
      className="relative"
      style={{
        width,
        maxWidth: `100%`,
      }}
    >
      <Image
        src={appendHostToImage(imageSrc)}
        width={width}
        height={height}
        alt=""
      />
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps, isDragActive }) => {
          return (
            <div
              {...getRootProps()}
              className={cx(styles.Dropzone, {
                'dropzone--isActive': isDragActive,
              })}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop files here...</p>
              ) : (
                <p>Drop a file here or click to select a file to upload.</p>
              )}
            </div>
          );
        }}
      </Dropzone>
    </div>
  );
};
