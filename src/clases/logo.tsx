import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, Space } from 'antd';

const Logo: React.FC = () => (
  <Space direction="vertical" size={16}>
    <Space wrap size={16}>
      <Avatar size={125} icon={<UserOutlined />} src="data:image/jpeg;base64,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" />
    </Space>
  </Space>
);

export default Logo;