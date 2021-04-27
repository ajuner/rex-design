import React from 'react';
import { Box, Button, useBoolean } from '@rexd/core';
import { Form, FormItem, Submit, Reset, FormButtonGroup } from '@rexd/form';

export default { title: 'Form/LegacyForm' };

const listData = [
  { label: '设计师', value: '01' },
  { label: '工程师', value: '02' },
  { label: '产品经理', value: '03' },
  { label: '测试开发', value: '04' },
];

const files = [
  {
    id: '01',
    name: 'IMG.png',
    url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
  },
  {
    id: '02',
    name: 'test.png',
    url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
  },
  {
    id: '03',
    name: 'long.png',
    url: 'https://img.alicdn.com/tfs/TB1gjPyp9slXu8jSZFuXXXg7FXa-750-272.png',
  },
];

export function Basic() {
  return (
    <Form onSubmit={console.log}>
      <FormItem label="开关" name="switch" component="switch" required />
      <FormItem label="复选框" name="checkboxGroup" component="checkboxGroup" required dataSource={listData} />
      <FormItem label="单选框" name="radioGroup" component="radioGroup" required dataSource={listData} />
      <FormItem label="文件上传" name="filePicker" component="filePicker" required />
      <FormItem label="媒体上传" name="mediaPicker" component="mediaPicker" required />
      <FormItem label="输入框" name="input" component="input" required />
      <FormItem label="多行输入" name="textarea" component="textarea" required />
      <FormItem label="数字输入" name="numberInput" component="numberInput" required />
      <FormItem label="时间" name="time" component="timePicker" required />
      <FormItem label="日期" name="date" component="datePicker" required />
      <FormItem label="日期范围" name="dateRange" component="rangePicker" required />
      {/* <FormItem label="下拉选择" name="select" component="select" required dataSource={listData} /> */}
      {/* <FormItem label="树选择" name="treeSelect" component="treeSelect" required dataSource={[]} /> */}
      {/* <FormItem label="范围" name="range" component="range" required /> */}

      <FormButtonGroup>
        <Submit />
        <Reset />
      </FormButtonGroup>
    </Form>
  );
}

export function Preview() {
  const [isPreview, { toggle }] = useBoolean(true);
  return (
    <Box>
      <Box mb="xxl">
        <Button type="primary" onClick={toggle}>
          切换预览态
        </Button>
      </Box>
      <Form isPreview={isPreview}>
        <FormItem label="开关" name="switch" component="switch" required defaultValue={true} />
        <FormItem
          label="复选框"
          name="checkboxGroup"
          component="checkboxGroup"
          required
          defaultValue={['01', '02']}
          dataSource={listData}
        />
        <FormItem
          label="单选框"
          name="radioGroup"
          component="radioGroup"
          required
          defaultValue="01"
          dataSource={listData}
        />
        <FormItem label="文件上传" name="filePicker" component="filePicker" required defaultValue={files} />
        <FormItem label="媒体上传" name="mediaPicker" component="mediaPicker" required defaultValue={files} />
        <FormItem label="输入框" name="input" component="input" required defaultValue="hello world" />
        <FormItem label="多行输入" name="textarea" component="textarea" required defaultValue="hello" />
        <FormItem label="数字输入" name="numberInput" component="numberInput" required defaultValue={1000} />
        <FormItem label="时间" name="time" component="timePicker" required defaultValue="11:12:13" />
        <FormItem label="日期" name="date" component="datePicker" required defaultValue="2021-04-01" />
        <FormItem
          label="日期范围"
          name="dateRange"
          component="rangePicker"
          required
          defaultValue={['2021-04-01', '2021-04-15']}
        />
      </Form>
    </Box>
  );
}
