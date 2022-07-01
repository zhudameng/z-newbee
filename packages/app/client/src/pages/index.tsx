import {
  ACLProvider,
  ACLShortcut,
  AdminLayout,
  AntdConfigProvider,
  AntdSchemaComponentProvider,
  APIClientProvider,
  AuthLayout,
  BlockSchemaComponentProvider,
  BlockTemplateDetails,
  BlockTemplatePage,
  ChinaRegionProvider,
  CollectionManagerShortcut,
  compose,
  DesignableSwitch,
  FileStorageShortcut,
  i18n,
  MenuItemInitializers,
  PluginManagerProvider,
  RemoteDocumentTitleProvider,
  RemoteRouteSwitchProvider,
  // RemoteCollectionManagerProvider,
  RouteSchemaComponent,
  RouteSwitch,
  SchemaComponentProvider,
  SchemaInitializerProvider,
  SchemaTemplateShortcut,
  SigninPage,
  SignupPage,
  Slate,
  SystemSettingsProvider,
  SystemSettingsShortcut,
  useRoutes,
  WorkflowPage,
  WorkflowRouteProvider,
  WorkflowShortcut
} from '@znewbee/client';
import { notification } from 'antd';
import '@/pages/antd.css';
import React,{useEffect} from 'react';
import { I18nextProvider } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import apiClient from './apiClient';
import { TpWatermark } from './tools';

apiClient.axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const redirectTo = error?.response?.data?.redirectTo;
    if (redirectTo) {
      return (window.location.href = redirectTo);
    }
    notification.error({
      message: error?.response?.data?.errors?.map?.((error: any) => {
        return <div>{error.message}</div>;
      }),
    });
    throw error;
  },
);

const providers = [
  // [HashRouter],
  // [MemoryRouter, { initialEntries: ['/'] }],
  [APIClientProvider, { apiClient }],
  [I18nextProvider, { i18n }],

  [AntdConfigProvider, { remoteLocale: true }],
  [
    RemoteRouteSwitchProvider,
    {
      components: {
        AuthLayout,
        AdminLayout,
        RouteSchemaComponent,
        SigninPage,
        SignupPage,
        WorkflowPage,
        BlockTemplatePage,
        BlockTemplateDetails,
      },
    },
  ],
  SystemSettingsProvider,
  [
    PluginManagerProvider,
    {
      components: {
        ACLShortcut,
        DesignableSwitch,
        CollectionManagerShortcut,
        WorkflowShortcut,
        SystemSettingsShortcut,
        SchemaTemplateShortcut,
        FileStorageShortcut,
      },
    },
  ],
  [SchemaComponentProvider, { components: { Slate, Link, NavLink } }],
  // RemoteCollectionManagerProvider,
  [
    SchemaInitializerProvider,
    {
      initializers: {
        MenuItemInitializers,
      },
    },
  ],
  BlockSchemaComponentProvider,
  AntdSchemaComponentProvider,
  ACLProvider,
  ChinaRegionProvider,
  WorkflowRouteProvider,
  RemoteDocumentTitleProvider,
];

const App = compose(...providers)(() => {
  const routes = useRoutes();
  useEffect(() => {
    TpWatermark("云果数字供应链");
  },["hello"])
  return (
    <div>
      <RouteSwitch routes={routes} />
    </div>
  );
});

export default App;
