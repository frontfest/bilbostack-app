if ! [ -x "$(command -v git)" ]; then
  echo 'Git is not installed. Installing it...' >&2
  sudo apt install git
  if ! [ -x "$(command -v git)" ]; then
    echo 'Error installing Git. Please do it manually.'
    exit 1
  fi
fi

if ! [ -x "$(command -v node)" ]; then
  echo 'Node is not installed. Installing it...' >&2
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
  source ~/.bashrc
  nvm install --lts
  if ! [ -x "$(command -v node)" ]; then
    echo 'Error installing Node. Please do it manually.'
    exit 1
  fi
fi

if ! [ -x "$(command -v docker)" ]; then
  echo 'Docker is not installed. Installing it...' >&2
  sudo apt install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
  sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
  sudo apt update
  sudo apt install docker-ce docker-ce-cli containerd.io
  if ! [ -x "$(command -v docker)" ]; then
    echo 'Error installing Docker. Please do it manually.'
    exit 1
  fi
fi

if ! [ -x "$(command -v docker-compose)" ]; then
  echo 'docker-compose is not installed. Installing it...' >&2
  sudo curl -L "https://github.com/docker/compose/releases/download/1.25.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
  sudo chmod +x /usr/local/bin/docker-compose
  if ! [ -x "$(command -v docker-compose)" ]; then
    echo 'Error installing docker-compose. Please do it manually.'
    exit 1
  fi
fi

if ! [ -x "$(command -v yarn)" ]; then
  echo 'Yarn is not installed. Installing it...' >&2
  npm -g install yarn
  if ! [ -x "$(command -v yarn)" ]; then
    echo 'Error installing Yarn. Please do it manually.'
    exit 1
  fi
fi

if ! [ -d "frontfest-app" ]; then
  echo Downloading repository...
  git clone https://github.com/frontfest/frontfest-app.git
fi

if ! [ -f ".env" ]; then
  echo 'Error: file .env does not exist. Please create it and fill it accordingly.'
  exit 1
fi

cp .env ./frontfest-app
pushd frontfest-app
yarn prod:up
