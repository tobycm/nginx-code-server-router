# NGINX code-server router

## How to install

### Prerequisites
- NGINX (`sudo apt install nginx`)
- Git
- sudo
- Smileys :)

### Step 1: Clone this repo:
```bash
git clone https://github.com/tobycm/nginx-code-server-router.git
```

### Step 2: Copy files to /etc/nginx
```bash
rm README.md LICENSE.md
cp -r * /etc/nginx/
```

### Step 2.5: Add NGINX PPA:
```bash
sudo apt install curl gnupg2 ca-certificates lsb-release debian-archive-keyring
curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \
    | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null 
echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/debian `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list
sudo apt update
```

### Step 3: Install njs for NGINX:
```bash
sudo apt install nginx-module-njs
```

### Step 4: Watch [this](https://youtube.com/watch?v=dQw4w9WgXcQ)

### Step 5: Chill

If you have already set [this](https://github.com/tobycm/code-server-instance-manager-nginx/) up, you can run nginx with sudo nginx.
