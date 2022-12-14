
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into public-facing code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const SESSION_MANAGER: string;
	export const WINDOWID: string;
	export const __ETC_PROFILE_DONE: string;
	export const COLORTERM: string;
	export const XDG_CONFIG_DIRS: string;
	export const ZELLIJ_SESSION_NAME: string;
	export const NIX_BUILD_CORES: string;
	export const XDG_MENU_PREFIX: string;
	export const configureFlags: string;
	export const LANGUAGE: string;
	export const shell: string;
	export const depsHostHost: string;
	export const NODE: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_config_ignore_scripts: string;
	export const npm_package_scripts_check_watch: string;
	export const NAUTILUS_EXTENSION_DIR: string;
	export const SSH_AUTH_SOCK: string;
	export const DIRENV_DIR: string;
	export const STRINGS: string;
	export const npm_package_private: string;
	export const SHELL_SESSION_ID: string;
	export const depsTargetTarget: string;
	export const XCURSOR_PATH: string;
	export const stdenv: string;
	export const npm_config_argv: string;
	export const builder: string;
	export const npm_config_bin_links: string;
	export const DESKTOP_SESSION: string;
	export const GDK_PIXBUF_MODULE_FILE: string;
	export const shellHook: string;
	export const DIRENV_FILE: string;
	export const EDITOR: string;
	export const phases: string;
	export const PWD: string;
	export const NIX_PROFILES: string;
	export const NIX_GSETTINGS_OVERRIDES_DIR: string;
	export const TRACKER_CLI_SUBCOMMANDS_DIR: string;
	export const npm_config_save_prefix: string;
	export const SOURCE_DATE_EPOCH: string;
	export const npm_package_devDependencies_vite: string;
	export const LOGNAME: string;
	export const XDG_SESSION_DESKTOP: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const XDG_SESSION_TYPE: string;
	export const NIX_ENFORCE_NO_NATIVE: string;
	export const npm_package_readmeFilename: string;
	export const CUPS_DATADIR: string;
	export const NIX_PATH: string;
	export const SYSTEMD_EXEC_PID: string;
	export const npm_package_scripts_build: string;
	export const NIXPKGS_CONFIG: string;
	export const CXX: string;
	export const _: string;
	export const XAUTHORITY: string;
	export const system: string;
	export const HOST_PATH: string;
	export const QT_STYLE_OVERRIDE: string;
	export const GDM_LANG: string;
	export const IN_NIX_SHELL: string;
	export const doInstallCheck: string;
	export const HOME: string;
	export const USERNAME: string;
	export const NIX_BINTOOLS: string;
	export const SSH_ASKPASS: string;
	export const npm_config_version_git_tag: string;
	export const LANG: string;
	export const npm_package_devDependencies_typescript: string;
	export const LS_COLORS: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const depsTargetTargetPropagated: string;
	export const npm_config_init_license: string;
	export const KONSOLE_DBUS_SERVICE: string;
	export const npm_package_version: string;
	export const STARSHIP_SHELL: string;
	export const WAYLAND_DISPLAY: string;
	export const KONSOLE_DBUS_SESSION: string;
	export const PROFILEHOME: string;
	export const GIO_EXTRA_MODULES: string;
	export const outputs: string;
	export const npm_config_version_commit_hooks: string;
	export const NIX_STORE: string;
	export const LD: string;
	export const INVOCATION_ID: string;
	export const buildPhase: string;
	export const KONSOLE_VERSION: string;
	export const MANAGERPID: string;
	export const DIRENV_DIFF: string;
	export const INIT_CWD: string;
	export const READELF: string;
	export const STARSHIP_SESSION_KEY: string;
	export const npm_package_scripts_preview: string;
	export const NIX_USER_PROFILE_DIR: string;
	export const INFOPATH: string;
	export const npm_lifecycle_script: string;
	export const npm_package_description: string;
	export const doCheck: string;
	export const GNOME_SETUP_DISPLAY: string;
	export const npm_config_version_tag_prefix: string;
	export const YARN_WRAP_OUTPUT: string;
	export const depsBuildBuild: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const XDG_SESSION_CLASS: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const XDG_DESKTOP_PORTAL_DIR: string;
	export const GTK_PATH: string;
	export const SIZE: string;
	export const propagatedNativeBuildInputs: string;
	export const LESSOPEN: string;
	export const npm_package_type: string;
	export const USER: string;
	export const strictDeps: string;
	export const COLORFGBG: string;
	export const TZDIR: string;
	export const AR: string;
	export const AS: string;
	export const DISPLAY: string;
	export const NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const npm_config_version_git_sign: string;
	export const NM: string;
	export const npm_config_version_git_message: string;
	export const PAGER: string;
	export const NIX_CFLAGS_COMPILE: string;
	export const QTWEBKIT_PLUGIN_PATH: string;
	export const patches: string;
	export const __NIXOS_SET_ENVIRONMENT_DONE: string;
	export const buildInputs: string;
	export const LOCALE_ARCHIVE: string;
	export const LESSKEYIN_SYSTEM: string;
	export const npm_config_user_agent: string;
	export const GDM_X_SERVER_EXTRA_ARGS: string;
	export const QML2_IMPORT_PATH: string;
	export const TERMINFO_DIRS: string;
	export const npm_execpath: string;
	export const LD_LIBRARY_PATH: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies_svelte: string;
	export const MOZ_PLUGIN_PATH: string;
	export const npm_package_scripts_test: string;
	export const XDG_RUNTIME_DIR: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const npm_config_strict_ssl: string;
	export const NODE_PATH: string;
	export const depsBuildTarget: string;
	export const OBJCOPY: string;
	export const out: string;
	export const npm_package_scripts_dev: string;
	export const KDEDIRS: string;
	export const STRIP: string;
	export const JOURNAL_STREAM: string;
	export const XDG_DATA_DIRS: string;
	export const npm_package_scripts_check: string;
	export const LIBEXEC_PATH: string;
	export const OBJDUMP: string;
	export const PATH: string;
	export const propagatedBuildInputs: string;
	export const dontAddDisableDepTrack: string;
	export const GDMSESSION: string;
	export const CC: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const ZELLIJ: string;
	export const NIX_CC: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_package_devDependencies__playwright_test: string;
	export const depsBuildTargetPropagated: string;
	export const depsBuildBuildPropagated: string;
	export const RUST_BACKTRACE: string;
	export const DIRENV_WATCHES: string;
	export const NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const npm_config_registry: string;
	export const QT_PLUGIN_PATH: string;
	export const NIX_INDENT_MAKE: string;
	export const npm_config_ignore_optional: string;
	export const CONFIG_SHELL: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const npm_node_execpath: string;
	export const RANLIB: string;
	export const npm_config_engine_strict: string;
	export const NIX_HARDENING_ENABLE: string;
	export const OLDPWD: string;
	export const NIX_LDFLAGS: string;
	export const nativeBuildInputs: string;
	export const name: string;
	export const KONSOLE_DBUS_WINDOW: string;
	export const depsHostHostPropagated: string;
	export const npm_config_init_version: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into public-facing code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		SESSION_MANAGER: string;
		WINDOWID: string;
		__ETC_PROFILE_DONE: string;
		COLORTERM: string;
		XDG_CONFIG_DIRS: string;
		ZELLIJ_SESSION_NAME: string;
		NIX_BUILD_CORES: string;
		XDG_MENU_PREFIX: string;
		configureFlags: string;
		LANGUAGE: string;
		shell: string;
		depsHostHost: string;
		NODE: string;
		npm_package_devDependencies_tslib: string;
		npm_config_ignore_scripts: string;
		npm_package_scripts_check_watch: string;
		NAUTILUS_EXTENSION_DIR: string;
		SSH_AUTH_SOCK: string;
		DIRENV_DIR: string;
		STRINGS: string;
		npm_package_private: string;
		SHELL_SESSION_ID: string;
		depsTargetTarget: string;
		XCURSOR_PATH: string;
		stdenv: string;
		npm_config_argv: string;
		builder: string;
		npm_config_bin_links: string;
		DESKTOP_SESSION: string;
		GDK_PIXBUF_MODULE_FILE: string;
		shellHook: string;
		DIRENV_FILE: string;
		EDITOR: string;
		phases: string;
		PWD: string;
		NIX_PROFILES: string;
		NIX_GSETTINGS_OVERRIDES_DIR: string;
		TRACKER_CLI_SUBCOMMANDS_DIR: string;
		npm_config_save_prefix: string;
		SOURCE_DATE_EPOCH: string;
		npm_package_devDependencies_vite: string;
		LOGNAME: string;
		XDG_SESSION_DESKTOP: string;
		QT_QPA_PLATFORMTHEME: string;
		XDG_SESSION_TYPE: string;
		NIX_ENFORCE_NO_NATIVE: string;
		npm_package_readmeFilename: string;
		CUPS_DATADIR: string;
		NIX_PATH: string;
		SYSTEMD_EXEC_PID: string;
		npm_package_scripts_build: string;
		NIXPKGS_CONFIG: string;
		CXX: string;
		_: string;
		XAUTHORITY: string;
		system: string;
		HOST_PATH: string;
		QT_STYLE_OVERRIDE: string;
		GDM_LANG: string;
		IN_NIX_SHELL: string;
		doInstallCheck: string;
		HOME: string;
		USERNAME: string;
		NIX_BINTOOLS: string;
		SSH_ASKPASS: string;
		npm_config_version_git_tag: string;
		LANG: string;
		npm_package_devDependencies_typescript: string;
		LS_COLORS: string;
		XDG_CURRENT_DESKTOP: string;
		depsTargetTargetPropagated: string;
		npm_config_init_license: string;
		KONSOLE_DBUS_SERVICE: string;
		npm_package_version: string;
		STARSHIP_SHELL: string;
		WAYLAND_DISPLAY: string;
		KONSOLE_DBUS_SESSION: string;
		PROFILEHOME: string;
		GIO_EXTRA_MODULES: string;
		outputs: string;
		npm_config_version_commit_hooks: string;
		NIX_STORE: string;
		LD: string;
		INVOCATION_ID: string;
		buildPhase: string;
		KONSOLE_VERSION: string;
		MANAGERPID: string;
		DIRENV_DIFF: string;
		INIT_CWD: string;
		READELF: string;
		STARSHIP_SESSION_KEY: string;
		npm_package_scripts_preview: string;
		NIX_USER_PROFILE_DIR: string;
		INFOPATH: string;
		npm_lifecycle_script: string;
		npm_package_description: string;
		doCheck: string;
		GNOME_SETUP_DISPLAY: string;
		npm_config_version_tag_prefix: string;
		YARN_WRAP_OUTPUT: string;
		depsBuildBuild: string;
		npm_package_devDependencies_svelte_check: string;
		XDG_SESSION_CLASS: string;
		TERM: string;
		npm_package_name: string;
		XDG_DESKTOP_PORTAL_DIR: string;
		GTK_PATH: string;
		SIZE: string;
		propagatedNativeBuildInputs: string;
		LESSOPEN: string;
		npm_package_type: string;
		USER: string;
		strictDeps: string;
		COLORFGBG: string;
		TZDIR: string;
		AR: string;
		AS: string;
		DISPLAY: string;
		NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		npm_config_version_git_sign: string;
		NM: string;
		npm_config_version_git_message: string;
		PAGER: string;
		NIX_CFLAGS_COMPILE: string;
		QTWEBKIT_PLUGIN_PATH: string;
		patches: string;
		__NIXOS_SET_ENVIRONMENT_DONE: string;
		buildInputs: string;
		LOCALE_ARCHIVE: string;
		LESSKEYIN_SYSTEM: string;
		npm_config_user_agent: string;
		GDM_X_SERVER_EXTRA_ARGS: string;
		QML2_IMPORT_PATH: string;
		TERMINFO_DIRS: string;
		npm_execpath: string;
		LD_LIBRARY_PATH: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies_svelte: string;
		MOZ_PLUGIN_PATH: string;
		npm_package_scripts_test: string;
		XDG_RUNTIME_DIR: string;
		npm_package_devDependencies_svelte_preprocess: string;
		npm_config_strict_ssl: string;
		NODE_PATH: string;
		depsBuildTarget: string;
		OBJCOPY: string;
		out: string;
		npm_package_scripts_dev: string;
		KDEDIRS: string;
		STRIP: string;
		JOURNAL_STREAM: string;
		XDG_DATA_DIRS: string;
		npm_package_scripts_check: string;
		LIBEXEC_PATH: string;
		OBJDUMP: string;
		PATH: string;
		propagatedBuildInputs: string;
		dontAddDisableDepTrack: string;
		GDMSESSION: string;
		CC: string;
		npm_package_devDependencies__sveltejs_kit: string;
		ZELLIJ: string;
		NIX_CC: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_package_devDependencies__playwright_test: string;
		depsBuildTargetPropagated: string;
		depsBuildBuildPropagated: string;
		RUST_BACKTRACE: string;
		DIRENV_WATCHES: string;
		NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		npm_config_registry: string;
		QT_PLUGIN_PATH: string;
		NIX_INDENT_MAKE: string;
		npm_config_ignore_optional: string;
		CONFIG_SHELL: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		npm_node_execpath: string;
		RANLIB: string;
		npm_config_engine_strict: string;
		NIX_HARDENING_ENABLE: string;
		OLDPWD: string;
		NIX_LDFLAGS: string;
		nativeBuildInputs: string;
		name: string;
		KONSOLE_DBUS_WINDOW: string;
		depsHostHostPropagated: string;
		npm_config_init_version: string;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: string]: string | undefined;
	}
}
