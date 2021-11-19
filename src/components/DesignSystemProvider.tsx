import React from 'react';
import { IdProvider } from '@radix-ui/react-id';

const DesignSystemProvider: React.FC = ({ children }) => (
  <IdProvider>{children}</IdProvider>
);

export { DesignSystemProvider };
