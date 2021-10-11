

# trying again..
> moving dirs to fix permission issues caused by p-cloud

Notes:
- This time I'm going to try using pnpm !
- The commands below don't include the changes required to the config or template files!

### initial project setup
```bash
	
	#initial project setup
	npm init astro -- --template "minimal" .
	git init -b main && git add --all && git commit -m "iniital commit"
	pnpm install

```

### tailwind support
```bash

	#add tailwind (astro handles tailwind's peer-deps)
	pnpm install --save-dev tailwindcss@latest

	#init tailwind (generates custom config)
	pnpx tailwindcss init

	#useful tailwind plugins
	pnpm install --save-dev @tailwindcss/aspect-ratio @tailwindcss/forms @tailwindcss/line-clamp @tailwindcss/typography
```

### connect local repo to remote and sync

If you want to use github, you'll need a personal access token:
> https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

Without a token, you won't be able to push changes via the ``git push`` command.


```bash
    git remote add origin https://<USER>:<TOKEN>@github.com/<user>/<repo-name>.git

    #i think this is only needed if branch isn't already called "main"
    #keeping for reference
    git branch -M main

    git push -u origin main
```

You can always add the user/token later. To change the origin url:

```bash
	git remote remove origin
```

To see if "origin" is set, use:
```bash
	git config --list
```
and look for ``remote.origin.url=...`` and ``remote.origin.fetch=...``







