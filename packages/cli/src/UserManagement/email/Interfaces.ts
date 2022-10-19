export interface UserManagementMailerImplementation {
	sendMail: (mailData: MailData) => Promise<SendEmailResult>;
	verifyConnection: () => Promise<void>;
}

export type InviteEmailData = {
	email: string;
	firstName?: string;
	lastName?: string;
	inviteAcceptUrl: string;
	domain: string;
};

export type PasswordResetData = {
	email: string;
	firstName?: string;
	lastName?: string;
	passwordResetUrl: string;
	domain: string;
	isLdapUser: boolean;
};

export type SendEmailResult = {
	success: boolean;
	error?: Error;
};

export type MailData = {
	body: string | Buffer;
	emailRecipients: string | string[];
	subject: string;
	textOnly?: string;
};
