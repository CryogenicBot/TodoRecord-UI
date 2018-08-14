$prov_script = <<-SCRIPT
echo I am provisioning...

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo add-apt-repository ppa:git-core/ppa

sudo apt-get update

curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

sudo apt-get install -y git

sudo apt-get install -y yarn

npm install -g typescript --no-bin-links

SCRIPT

Vagrant.configure("2") do |config|

    config.vm.box = "ubuntu/xenial64"

    config.vm.provider "virtualbox" do |vb|
        vb.gui = false
        vb.customize ["modifyvm", :id, "--memory", "16384"]
        vb.customize ["modifyvm", :id, "--cpus", 16]
        vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
        vb.customize ["modifyvm", :id, "--uartmode1", "disconnected"]
    end 

    config.vm.network "forwarded_port", guest: 3000, host: 9000

    config.vm.provision "shell", inline: $prov_script  

end