import React from 'react';
import styled from 'styled-components';
import { Icon } from '@rexd/icon';
import { Box, Text } from '../layout';
import { Link } from '../link';
import { Button } from '../button';
import { noop } from '../../utils';
import { FileStatusType } from './types';
import { FileListProps, FileListItemProps } from './types';

const ListWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  > li {
    margin-top: var(--rex-space-m);
  }
`;

export function FileList(props: FileListProps) {
  const { items = [], onRemove = noop, disabled } = props;

  return (
    <ListWrapper>
      {items.map((item) => (
        <FileListItem key={item.id} file={item} onRemove={onRemove} disabled={disabled} />
      ))}
    </ListWrapper>
  );
}

const getItemBg = (status: FileStatusType) => {
  const map = {
    success: 'rgba(50, 179, 87, .1)',
    error: 'rgba(235, 65, 65, .1)',
  };
  return map[status] || 'fill.layer1';
};

function FileListItem(props: FileListItemProps) {
  const { file, onRemove, disabled } = props;
  const bg = getItemBg(file.status);

  return (
    <Box
      as="li"
      bg={bg}
      px="m"
      py="s"
      fontSize="body"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Link>{file.name}</Link>
        {file.error && (
          <Text color="error.normal">
            ({file.error.name}：{file.error.message})
          </Text>
        )}
      </Box>
      <Button
        shape="text"
        size="small"
        isIconOnly
        onClick={() => onRemove(file.id, { data: file })}
        disabled={disabled}
      >
        <Icon type="close" />
      </Button>
    </Box>
  );
}
