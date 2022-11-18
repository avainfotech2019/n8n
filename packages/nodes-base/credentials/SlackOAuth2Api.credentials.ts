import { ICredentialType, INodeProperties } from 'n8n-workflow';

//https://api.slack.com/authentication/oauth-v2
const userScopes = [
	'channels:write',
	'chat:write',
	'chat.postMessage',
	'files:read',
	'files:write',
	'groups:read',
	'im:read',
	'mpim:read',
	'reactions:read',
	'reactions:write',
	'stars:read',
	'stars:write',
	'usergroups:write',
	'usergroups:read',
	'users.files'
	'users.profile:read',
	'users.profile:write',
	'users:read',
];

export class SlackOAuth2Api implements ICredentialType {
	name = 'slackOAuth2Api';
	extends = ['oAuth2Api'];
	displayName = 'Slack OAuth2 API';
	documentationUrl = 'slack';
	properties: INodeProperties[] = [
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'authorizationCode',
		},
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'hidden',
			default: 'https://slack.com/oauth/v2/authorize',
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default: 'https://slack.com/api/oauth.v2.access',
		},
		//https://api.slack.com/scopes
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: 'chat:write',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden',
			default: `user_scope=${userScopes.join(' ')}`,
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'body',
		},
	];
}
