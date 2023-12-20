import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/App.css';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import AuthLayout from 'layouts/auth';
import AdminLayout from 'layouts/admin';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme/theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import SignIn from 'views/auth/signIn';

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<React.StrictMode>
			<ThemeEditorProvider>
				<BrowserRouter>
						<Route path={`/auth`} component={AuthLayout} />
						<Route path={`/admin`} component={AdminLayout} />
						<Route path={`/sign-in`} component={SignIn} />
						<Redirect from='/' to='/sign-in' />
				</BrowserRouter>
			</ThemeEditorProvider>
		</React.StrictMode>
	</ChakraProvider>,
	document.getElementById('root')
);
