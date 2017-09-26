
# Analytics with ElasticSearch

Slide deck: https://docs.google.com/presentation/d/1ubyoRG08TdUyf_rN_evLnFJ3iWkl1NDT4QzpegS0xqs

## Setup

We provide an online environment in which you can do everything so local installation is *not required*. However, there's no promise that the online environment will work perfectly and you'll be sharing it with other people; we will also eventually shut it down, so if you want to take something home you will need to install the following components:

 * ElasticSearch
 * Kibana

You may wish to install `nodejs` if you want to build your own app for sending out analytics data; you may wish to install an HTTP client like `curl` or Paw to make loading data into ElasticSearch easier. Neither is strictly required.

Installing ElasticSearch locally:

https://www.elastic.co/guide/en/elasticsearch/reference/current/_installation.html

If you have a Mac you can use homebrew:

```sh
brew install elasticsearch
brew services start elasticsearch
```

You can test your instance by going to http://localhost:9200/.

NOTE: You may need to configure your instance with CORS. See here: https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-http.html and set `http.cors.allow-origin` to `*`.

Installing Kibana locally:

https://www.elastic.co/guide/en/kibana/current/install.html

If you have a Mac you can, again, use homebrew:

```sh
brew install kibana
brew services start kibana
```

You can test your instance by going to http://localhost:5601/.

You can also run both these services on AWS if you would rather do that: http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html.

